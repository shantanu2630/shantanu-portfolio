import { Component, useMemo, useRef, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const arr = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    /* swallow — graceful degradation */
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function CssFallback() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(60% 50% at 50% 30%, rgba(59,130,246,0.18), transparent 70%), radial-gradient(40% 30% at 80% 80%, rgba(34,211,238,0.14), transparent 70%)",
      }}
    />
  );
}

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export function HeroBackground() {
  const supported = useMemo(() => hasWebGL(), []);

  return (
    <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
      {supported ? (
        <CanvasErrorBoundary fallback={<CssFallback />}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ParticleField />
          </Canvas>
        </CanvasErrorBoundary>
      ) : (
        <CssFallback />
      )}
    </div>
  );
}
