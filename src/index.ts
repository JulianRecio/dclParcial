import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  GltfContainer,
  InputAction,
  Material,
  MeshCollider,
  MeshRenderer,
  pointerEventsSystem,
  Transform,
  VisibilityComponent
} from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'

// You can remove this if you don't use any asset packs
initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer
})

import { bounceScalingSystem, circularSystem } from './systems'

import { setupUi } from './ui'
import { BounceScaling, Spinner } from './components'
import { createCube } from './factory'

// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(bounceScalingSystem)

export function main() {

  let tower = engine.addEntity()

  GltfContainer.create(tower, {
    src: 'models/torreReloj.glb',
  })

  Transform.create(tower, {
    position: Vector3.create(24,0,8),
    scale: Vector3.create(1,1,1), 
    rotation: Quaternion.fromEulerDegrees(0,180,0)  
  })

  let museum = engine.addEntity()

  GltfContainer.create(museum, {
    src: 'models/torre.glb',
  })

  Transform.create(museum, {
    position: Vector3.create(24,0,40.25),
    scale: Vector3.create(1,1,1), 
    rotation: Quaternion.fromEulerDegrees(0,270,0)  
  })


  let pawn = engine.addEntity()

  GltfContainer.create(pawn, {
    src: 'models/pawn.glb',
  })

  Transform.create(pawn, {
    position: Vector3.create(12, 1.8, 22),
    scale: Vector3.create(10,10,10)
  })

  let pawnColider = engine.addEntity()

  MeshCollider.setCylinder(pawnColider)

  Transform.create(pawnColider, {
    position: Vector3.create(12, 1.8, 22),
    scale: Vector3.create(2,1,1)
  })


  let mvArg = engine.addEntity()

  GltfContainer.create(mvArg, {
    src: 'models/estadioMVARG.glb',
  })

  Transform.create(mvArg, {
    position: Vector3.create(12, 0.9, 34),
    scale: Vector3.create(0.02,0.02,0.02),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
  })

  let mvArgColider = engine.addEntity()

  MeshCollider.setBox(mvArgColider)

  Transform.create(mvArgColider, {
    position: Vector3.create(12, 0.9, 33.5),
    scale: Vector3.create(4,4.5,4),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
  })



  let mustang = engine.addEntity()

  GltfContainer.create(mustang, {
    src: 'models/mustang.glb',
  })

  Transform.create(mustang, {
    position: Vector3.create(36,0.87,28),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(0,145,0)
  })

  let mustangCollider = engine.addEntity()

  MeshCollider.setBox(mustangCollider)

  Transform.create(mustangCollider, {
    position: Vector3.create(36,0.87,28),
    scale: Vector3.create(3,4,7),
    rotation: Quaternion.fromEulerDegrees(0,145,0)
  })

  let duck = engine.addEntity()

  GltfContainer.create(duck, {
    src: 'models/duck.glb',
  })

  Transform.create(duck, {
    position: Vector3.create(18,2.6,38),
    scale: Vector3.create(0.5,0.5,0.5),
    rotation: Quaternion.fromEulerDegrees(0,125,0)
  })
  
  let rubikCube = engine.addEntity()

  GltfContainer.create(rubikCube,{
    src: 'models/rubik.glb',
  })

  Transform.create(rubikCube,{
    position: Vector3.create(12,0.85,44),
    scale: Vector3.create(1,1,1),
    rotation: Quaternion.fromEulerDegrees(0,45,0)
    } 
  )
  
  let lamp = engine.addEntity()

  GltfContainer.create(lamp, {
    src: 'models/lamp.glb'
  })

  Transform.create(lamp, {
    position: Vector3.create(30,0.85,36),
    scale: Vector3.create(0.5,0.5,0.5)
  })

  let lavaLamp = engine.addEntity()

  GltfContainer.create(lavaLamp, {
    src: 'models/lavalamp.glb'
  })

  Transform.create(lavaLamp, {
    position: Vector3.create(20,0.85,26),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  let mongePuzzle1 = engine.addEntity()

  GltfContainer.create(mongePuzzle1, {
    src: 'models/vista1.glb'
  })

  Transform.create(mongePuzzle1, {
    position: Vector3.create(24,0.85,48),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })
}
