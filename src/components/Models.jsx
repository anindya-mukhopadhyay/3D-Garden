import React from "react";
import { useGLTF } from "@react-three/drei";

export function BighornModel(props) {
  const { scene } = useGLTF("/models/bighorn.glb");

  const handleDoubleClick = () => {
    alert(
      "🌱 Greenhouse Gardening\n" +
      "- Controls temperature & humidity for plants\n" +
      "- Protects plants from harsh weather & pests\n" +
      "- Grows vegetables, herbs, and flowers year-round\n" +
      "- Uses drip irrigation & ventilation for efficiency"
    );
  };

  return <primitive object={scene} {...props} onDoubleClick={handleDoubleClick} />;
}

export function CoconutTreeModel(props) {
  const { scene } = useGLTF("/models/coconut_tree.glb");

  const handleDoubleClick = () => {
    alert(
      "🌴 Coconut Tree\n" +
      "- Name: Coconut Palm\n" +
      "- Habitat: Tropical Coasts\n" +
      "- Produces coconuts, a great source of water and oil!"
    );
  };

  return (
    <primitive
      object={scene}
      {...props}
      scale={[0.1, 0.1, 0.1]}  // ✅ 90% Smaller
      onDoubleClick={handleDoubleClick}
    />
  );
}

export function NeemTreeModel(props) {  
  const { scene } = useGLTF("/models/neem_tree.glb");

  const handleDoubleClick = () => {
    alert(
      "🌿 Neem Tree\n" +
      "- Name: Azadirachta indica\n" +
      "- Medicinal Benefits: Used for skin care, dental care, and as a natural pesticide\n" +
      "- Found in: India, Africa, and tropical regions\n" +
      "- Known as: 'The Village Pharmacy' due to its healing properties"
    );
  };

  return (
    <primitive
      object={scene}
      {...props}
      scale={[0.006, 0.006, 0.006]}  // ✅ 95% Smaller
      onDoubleClick={handleDoubleClick}
    />
  );
}

export function AloeVeraModel(props) {  
  const { scene } = useGLTF("/models/aloevera_plant.glb");

  const handleDoubleClick = () => {
    alert(
      "🌵 Aloe Vera Plant\n" +
      "- Name: Aloe Barbadensis\n" +
      "- Medicinal Uses: Soothes burns, skin care, digestion aid\n" +
      "- Grows in: Dry, tropical climates\n" +
      "- Known as: 'The Miracle Plant' due to its healing properties"
    );
  };

  return (
    <primitive
      object={scene}
      {...props}
      scale={[1.00, 1.00, 1.00]}  // ✅ 92% Smaller
      onDoubleClick={handleDoubleClick}
    />
  );
}

export function GardenBridgeModel(props) {  
  const { scene } = useGLTF("/models/garden_bridge.glb");

  const handleDoubleClick = () => {
    alert(
      "🌉 Garden Bridge\n" +
      "- Used to decorate gardens & parks\n" +
      "- Provides a pathway over water or plants\n" +
      "- Made of wood, stone, or metal\n" +
      "- Enhances garden aesthetics & accessibility"
    );
  };

  return (
    <primitive
      object={scene}
      {...props}
      scale={[0.7, 0.9, 0.7]}  // ✅ 70% Smaller
      onDoubleClick={handleDoubleClick}
    />
  );
}

export function JungleModel(props) {  
  const { scene } = useGLTF("/models/jungle_1.glb");

  const handleDoubleClick = () => {
    alert(
      "🌳 Jungle Model\n" +
      "- Dense forest vegetation\n" +
      "- Provides a natural environment for wildlife\n" +
      "- Contains various species of plants & trees\n" +
      "- Supports biodiversity and ecosystems"
    );
  };

  return (
    <primitive
      object={scene}
      {...props}
      scale={[1, 1, 1]}  // ✅ Keep original size
      onDoubleClick={handleDoubleClick}
    />
  );
}
