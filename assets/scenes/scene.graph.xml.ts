export default `<group>
  <camera id="main-camera" fov="45" near="1.0" far="1500.0" pipelineLink="$default" z="100" />
  <group id="sceneGroup">
    <group id="rotateGroup">
      <model id="retroTV" modelLink="models/tv.obj" materialLink="materials/tv.material.json" ry="0" y="-25">
        <!-- <mesh meshId="Object018" /> -->
        <!-- <mesh meshId="Object016" /> -->
      </model>
    </group>
  </group>
  <light id="sun" type="Directional" materialLink="$lighting"  rx="-45" ry="-45"  intensity="1.0"  />
  <model id="skybox" modelLink="models/box.obj" materialLink="materials/sky.material.json"/>
</group>`;
