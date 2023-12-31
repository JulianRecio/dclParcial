import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  Entity,
  GltfContainer,
  InputAction,
  inputSystem,
  MeshCollider,
  PointerEvents,
  pointerEventsSystem,
  PointerEventType,
  Transform,
  VisibilityComponent} from '@dcl/sdk/ecs'
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

import { movePlayerTo, triggerEmote } from '~system/RestrictedActions'
import { setupCongratulationsMessage, setupUi } from './ui'


// Defining behavior. See `src/systems.ts` file.
engine.addSystem(circularSystem)
engine.addSystem(bounceScalingSystem)

export function main() {

  let tower = engine.addEntity()

  GltfContainer.create(tower, {
    src: 'models/Museo.glb',
  })

  Transform.create(tower, {
    position: Vector3.create(24,0,8),
    scale: Vector3.create(1,1,1), 
    rotation: Quaternion.fromEulerDegrees(0,270,0)  
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

  // Create AudioSource component
  AudioSource.create(museum, {
    audioClipUrl: 'sounds/InsideDekuTree.mp3',
    loop: true,
    playing: true,
  })


  let instruction = engine.addEntity()

  
  GltfContainer.create(instruction, {
    src: 'models/instruction.glb',
  })

  Transform.create(instruction, {
    position: Vector3.create(42.95,14,35),
    scale: Vector3.create(0.9,0.9,0.9),
    rotation: Quaternion.fromEulerDegrees(90,90,180)  
  })

  let pawn = engine.addEntity()

  GltfContainer.create(pawn, {
    src: 'models/pawn.glb',
  })

  Transform.create(pawn, {
    position: Vector3.create(12, 3.5, 22),
    scale: Vector3.create(30,30,30)
  })

  let pawnColider = engine.addEntity()

  MeshCollider.setCylinder(pawnColider)

  Transform.create(pawnColider, {
    position: Vector3.create(12, 1.8, 22),
    scale: Vector3.create(4,4,4)
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


  let duckColider = engine.addEntity()

  MeshCollider.setCylinder(duckColider)

  Transform.create(duckColider,{
    position: Vector3.create(18,2.6,38),
    scale: Vector3.create(2,1,2),

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

  let plant = engine.addEntity()

  GltfContainer.create(plant, {
    src: 'models/plant.glb'
  })

  Transform.create(plant, {
    position: Vector3.create(39.5,3.3,51.25),
    scale: Vector3.create(8,8,8),
  })

  let plantCollider = engine.addEntity()

  MeshCollider.setBox(plantCollider)

  Transform.create(plantCollider, {
    position: Vector3.create(39.5,3.3,51.25),
    scale: Vector3.create(3.5,3,3),
  })

  let mongePuzzleKey1 = engine.addEntity()

  GltfContainer.create(mongePuzzleKey1, {
    src: 'models/puzzleKey.glb'
  })

  Transform.create(mongePuzzleKey1, {
    position: Vector3.create(10,0.85,48),
    scale: Vector3.create(0.75,0.75,0.75)
  })
  
  PointerEvents.create(mongePuzzleKey1, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Collect"
      }
    }
  ]})

  let monge1FrontView = engine.addEntity()
 
  GltfContainer.create(monge1FrontView, {
    src: 'models/frame1frontView.glb'
  })

  Transform.create(monge1FrontView, {
    position: Vector3.create(32,3.85,52.1),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(90,180,0)
  })

  let monge1SideView = engine.addEntity()
   
  GltfContainer.create(monge1SideView, {
    src: 'models/frame1sideView.glb'
  })

  Transform.create(monge1SideView, {
    position: Vector3.create(5,3.85,34),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(90,90,0)
  })

  let monge1TopView = engine.addEntity()

  GltfContainer.create(monge1TopView, {
    src: 'models/frame1topView.glb'
  })

  Transform.create(monge1TopView, {
    position: Vector3.create(24,0.85,34),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(0,90,0)
  })
  
  let mongePuzzle1Spot1 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle1Spot1)

  Transform.create(mongePuzzle1Spot1, {
    position: Vector3.create(24,2.35,49.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle1Spot1, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle1Spot2 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle1Spot2)

  Transform.create(mongePuzzle1Spot2, {
    position: Vector3.create(25.5,2.35,49.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle1Spot2, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle1Spot3 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle1Spot3)

  Transform.create(mongePuzzle1Spot3, {
    position: Vector3.create(24,2.35,48),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle1Spot3, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle1Spot4 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle1Spot4)

  Transform.create(mongePuzzle1Spot4, {
    position: Vector3.create(25.5,2.35,48),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle1Spot4, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle1Spot5 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle1Spot5)

  Transform.create(mongePuzzle1Spot5, {
    position: Vector3.create(24,2.35,46.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle1Spot5, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})



  let keysCollected = 0
  // create system
  engine.addSystem(() => {
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzleKey1)){
      console.log('COLLECTED KEY 1')
      engine.removeEntity(mongePuzzleKey1)
      keysCollected++
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle1Spot1) && keysCollected == 1){
      console.log('PLACED KEY 1 ON PUZZLE 1')
      
      GltfContainer.create(mongePuzzle1Spot1, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--

      playPuzzleSolvedSFX(mongePuzzle1)
      GltfContainer.deleteFrom(plant)
      MeshCollider.deleteFrom(plantCollider)

      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle1Spot1) && keysCollected == 0){
      console.log('COLLECTED KEY 1')
    
      GltfContainer.deleteFrom(mongePuzzle1Spot1)
      GltfContainer.create(plant, {
        src: 'models/plant.glb'
      })
      
      resetPuzzleSolvedSFX(mongePuzzle1)
      MeshCollider.setBox(plantCollider)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle1Spot2) && keysCollected == 1){
      console.log('PLACED KEY 1 ON PUZZLE 1')
      
      GltfContainer.create(mongePuzzle1Spot2, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle1Spot2) && keysCollected == 0){
      console.log('COLLECTED KEY 1')
    
      GltfContainer.deleteFrom(mongePuzzle1Spot2)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle1Spot3) && keysCollected == 1){
      console.log('PLACED KEY 1 ON PUZZLE 1')
      
      GltfContainer.create(mongePuzzle1Spot3, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle1Spot3) && keysCollected == 0){
      console.log('COLLECTED KEY 1')
    
      GltfContainer.deleteFrom(mongePuzzle1Spot3)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }
   
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle1Spot4) && keysCollected == 1){
      console.log('PLACED KEY 1 ON PUZZLE 1')
      
      GltfContainer.create(mongePuzzle1Spot4, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle1Spot4) && keysCollected == 0){
      console.log('COLLECTED KEY 1')
    
      GltfContainer.deleteFrom(mongePuzzle1Spot4)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle1Spot5) && keysCollected == 1){
      console.log('PLACED KEY 1 ON PUZZLE 1')
      
      GltfContainer.create(mongePuzzle1Spot5, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle1Spot5) && keysCollected == 0){
      console.log('COLLECTED KEY 1')
    
      GltfContainer.deleteFrom(mongePuzzle1Spot5)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }
  })


  let mac = engine.addEntity()

  GltfContainer.create(mac, {
    src: 'models/classicMac.glb'
  })

  Transform.create(mac, {
    position: Vector3.create(24,21.25,21),
    scale: Vector3.create(60,60,60),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })

  let macCollider = engine.addEntity()

  MeshCollider.setBox(macCollider)

  Transform.create(macCollider, {
    position: Vector3.create(24,21.25,21),
    scale: Vector3.create(5,5,5)
  })

  let shark = engine.addEntity()

  GltfContainer.create(shark, {
    src: 'models/shark.glb'
  })

  Transform.create(shark,{
    position: Vector3.create(28,31.5,34),
    scale: Vector3.create(3.5,3.5,3.5),
    rotation: Quaternion.fromEulerDegrees(20,310,30)
  })

  let unicorn = engine.addEntity()

  GltfContainer.create(unicorn, {
    src: 'models/unicorn.glb'
  })

  Transform.create(unicorn,{
    position: Vector3.create(12,23.85,44),
    scale: Vector3.create(4,4,4),
    rotation: Quaternion.fromEulerDegrees(0,60,0)
  })


  let unicornCollider = engine.addEntity()

  MeshCollider.setCylinder(unicornCollider)

  Transform.create(unicornCollider,{
    position: Vector3.create(11,24,44),
    scale: Vector3.create(4,3,2),
    rotation: Quaternion.fromEulerDegrees(0,0,45)
  })

  let goatimus = engine.addEntity()

  GltfContainer.create(goatimus, {
    src: 'models/blocktimusPrime.glb'
  })

  
  Transform.create(goatimus,{
    position: Vector3.create(12,29.1,24),
    scale: Vector3.create(17.5,17.5,17.5),
    rotation: Quaternion.fromEulerDegrees(0,220,0)
  })

  let leg1 = engine.addEntity()

  MeshCollider.setBox(leg1)

  Transform.create(leg1,{
    position: Vector3.create(10.5,22,24),
    scale: Vector3.create(2,3,2),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })

  let leg2 = engine.addEntity()

  MeshCollider.setBox(leg2)

  Transform.create(leg2,{
    position: Vector3.create(14,22,23),
    scale: Vector3.create(2,3,2),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })

  let giantSword = engine.addEntity()

  GltfContainer.create(giantSword, {
    src: 'models/Sword.glb'
  })

  Transform.create(giantSword,{
    position: Vector3.create(38,28.6,28),
    scale: Vector3.create(11,11,11),
    rotation: Quaternion.fromEulerDegrees(135,310,15)
  })

  let giantSwordCollider = engine.addEntity()

  MeshCollider.setBox(giantSwordCollider)

  Transform.create(giantSwordCollider,{
    position: Vector3.create(32.75,23.25,29.95),
    scale: Vector3.create(2.6,11,0.5),
    rotation: Quaternion.fromEulerDegrees(135,310,15)
  })

  let motorcycle = engine.addEntity()

  GltfContainer.create(motorcycle, {
    src: 'models/Motorcycle.glb'
  })

  Transform.create(motorcycle, {
    position: Vector3.create(30,21,44),
    scale: Vector3.create(0.1,0.1,0.1),
    rotation: Quaternion.fromEulerDegrees(0,65,25)
  })

  let motorcycleCollider = engine.addEntity()

  MeshCollider.setBox(motorcycleCollider)

  Transform.create(motorcycleCollider, {
    position: Vector3.create(29.5,24,45.25),
    scale: Vector3.create(2.5,5.5,12),
    rotation: Quaternion.fromEulerDegrees(0,65,25)
  })

  let boombox = engine.addEntity()

  GltfContainer.create(boombox, {
    src: 'models/Boombox.glb'
  })

  Transform.create(boombox, {
    position: Vector3.create(36,21.25,24),
    scale: Vector3.create(3,3,3),
    rotation: Quaternion.fromEulerDegrees(0,315,0)
  })  

  let boomboxCollider = engine.addEntity()

  MeshCollider.setBox(boomboxCollider)

  Transform.create(boomboxCollider, {
    position: Vector3.create(36,24,24),
    scale: Vector3.create(2.25,6,8),
    rotation: Quaternion.fromEulerDegrees(0,45,0)
  })  

  let sedan = engine.addEntity()

  GltfContainer.create(sedan, {
    src: 'models/Car.glb'
  })

  Transform.create(sedan, {
    position: Vector3.create(14,21.25,34),
    scale: Vector3.create(0.09,0.09,0.09),
    rotation: Quaternion.fromEulerDegrees(0,45,0)
  })  

  let sedanCollider = engine.addEntity()

  MeshCollider.setBox(sedanCollider)

  Transform.create(sedanCollider, {
    position: Vector3.create(14,22.5,34),
    scale: Vector3.create(3,3,7.6),
    rotation: Quaternion.fromEulerDegrees(0,45,0)
  })  

  let mongePuzzle2 = engine.addEntity()

  GltfContainer.create(mongePuzzle2, {
    src: 'models/vista2.glb'
  })

  Transform.create(mongePuzzle2, {
    position: Vector3.create(24,21.25,34),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  let eightBall = engine.addEntity()

  GltfContainer.create(eightBall,{
    src: 'models/eightBall.glb'
  })

  Transform.create(eightBall, {
    position: Vector3.create(39.5,22.9,51.85),
    scale: Vector3.create(1.75,1.75,1.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  let eightBallCollider = engine.addEntity()

  MeshCollider.setSphere(eightBallCollider)

  Transform.create(eightBallCollider, {
    position: Vector3.create(39.5,22.9,51.85),
    scale: Vector3.create(3,3,3)
  })

  let mongePuzzleKey2 = engine.addEntity()

  GltfContainer.create(mongePuzzleKey2, {
    src: 'models/puzzleKey.glb'
  })

  Transform.create(mongePuzzleKey2, {
    position: Vector3.create(38,21.25,22),
    scale: Vector3.create(0.75,0.75,0.75)
  })
  
  PointerEvents.create(mongePuzzleKey2, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Collect"
      }
    }
  ]})

  let monge2FrontView = engine.addEntity()
 
  GltfContainer.create(monge2FrontView, {
    src: 'models/frame2frontView.glb'
  })

  Transform.create(monge2FrontView, {
    position: Vector3.create(13,30,17.5),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(90,0,0)
  })

  let monge2SideView = engine.addEntity()
   
  GltfContainer.create(monge2SideView, {
    src: 'models/frame2sideView.glb'
  })

  Transform.create(monge2SideView, {
    position: Vector3.create(5,32,48),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(90,90,0)
  })

  let monge2TopView = engine.addEntity()

  GltfContainer.create(monge2TopView, {
    src: 'models/frame2topView.glb'
  })

  Transform.create(monge2TopView, {
    position: Vector3.create(33,21.25,28),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })
  
  let mongePuzzle2Spot1 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle2Spot1)

  Transform.create(mongePuzzle2Spot1, {
    position: Vector3.create(22.5,22.75,35.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle2Spot1, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle2Spot2 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle2Spot2)

  Transform.create(mongePuzzle2Spot2, {
    position: Vector3.create(25.5,21.25,35.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzle2Spot2, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle2Spot3 = engine.addEntity() 

  MeshCollider.setBox(mongePuzzle2Spot3)

  Transform.create(mongePuzzle2Spot3, {
    position: Vector3.create(25.5,22.75,32.5),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  
  PointerEvents.create(mongePuzzle2Spot3, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  engine.addSystem(() => {
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzleKey2)){
      console.log('COLLECTED KEY 2')
      engine.removeEntity(mongePuzzleKey2)
      keysCollected++
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle2Spot1) && keysCollected == 1){
      console.log('PLACED KEY 2 ON PUZZLE 2')
      
      GltfContainer.create(mongePuzzle2Spot1, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--

      playPuzzleSolvedSFX(mongePuzzle2)
      GltfContainer.deleteFrom(eightBall)
      MeshCollider.deleteFrom(eightBallCollider)

      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle2Spot1) && keysCollected == 0){
      console.log('COLLECTED KEY 2')
    
      GltfContainer.deleteFrom(mongePuzzle2Spot1)
      GltfContainer.create(eightBall, {
        src: 'models/eightBall.glb'
      })
      MeshCollider.setSphere(eightBallCollider)
      resetPuzzleSolvedSFX(mongePuzzle2)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle2Spot2) && keysCollected == 1){
      console.log('PLACED KEY 2 ON PUZZLE 2')
      
      GltfContainer.create(mongePuzzle2Spot2, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle2Spot2) && keysCollected == 0){
      console.log('COLLECTED KEY 2')
    
      GltfContainer.deleteFrom(mongePuzzle2Spot2)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle2Spot3) && keysCollected == 1){
      console.log('PLACED KEY 2 ON PUZZLE 2')
      
      GltfContainer.create(mongePuzzle2Spot3, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle2Spot3) && keysCollected == 0){
    console.log('COLLECTED KEY 2')
  
    GltfContainer.deleteFrom(mongePuzzle2Spot3)
    keysCollected++

    console.log("Keys collected: " + keysCollected)
  }

  }

  )



  let dragoon = engine.addEntity()

  GltfContainer.create(dragoon,{
    src: 'models/dragon.glb'
  })

  Transform.create(dragoon, {
    position: Vector3.create(24,42,24),
    scale: Vector3.create(10,10,10),
    rotation: Quaternion.fromEulerDegrees(0,310,0)
  }
  )

  let dragoonCollider1 = engine.addEntity()

  MeshCollider.setCylinder(dragoonCollider1)
  
  Transform.create(dragoonCollider1, {
    position: Vector3.create(25,43,22),
    scale: Vector3.create(7,14,7),
    rotation: Quaternion.fromEulerDegrees(0,0,90)
  }
  )

  let dragoonCollider2 = engine.addEntity()

  MeshCollider.setCylinder(dragoonCollider2)

  Transform.create(dragoonCollider2, {
    position: Vector3.create(18,41,29),
    scale: Vector3.create(3,14,3),
    rotation: Quaternion.fromEulerDegrees(0,90,90)
  }
  )

  let dragoonCollider3 = engine.addEntity()

  MeshCollider.setCylinder(dragoonCollider3)

  Transform.create(dragoonCollider3, {
    position: Vector3.create(25,40.5,37),
    scale: Vector3.create(1,11,1),
    rotation: Quaternion.fromEulerDegrees(0,0,90)
  }
  )

  let tank = engine.addEntity()

  GltfContainer.create(tank,{
    src: 'models/Tank.glb'
  })

  Transform.create(tank, {
    position: Vector3.create(10,39.65,28),
    scale: Vector3.create(0.6,0.6,0.6),
    rotation: Quaternion.fromEulerDegrees(0,290,0)
  }
  )

  let tankCollider = engine.addEntity()

  MeshCollider.setBox(tankCollider)

  Transform.create(tankCollider, {
    position: Vector3.create(10,41,28),
    scale: Vector3.create(7,6,7),
    rotation: Quaternion.fromEulerDegrees(0,290,0)
  }
  )

  let policeCar = engine.addEntity()

  GltfContainer.create(policeCar,{
    src:'models/policeCar.glb'
  })

  Transform.create(policeCar, {
    position: Vector3.create(29,39.5,46),
    scale: Vector3.create(2.5,2.5,2.5),
    rotation: Quaternion.fromEulerDegrees(0,210,0)
  }
  )

  let policeCarCollider = engine.addEntity()

  MeshCollider.setBox(policeCarCollider)

  Transform.create(policeCarCollider, {
    position: Vector3.create(29,41,46),
    scale: Vector3.create(4,2.5,8.5),
    rotation: Quaternion.fromEulerDegrees(0,210,0)
  })

  let snorlax = engine.addEntity()

  GltfContainer.create(snorlax,{
    src: 'models/snorlax.glb'
  })

  Transform.create(snorlax,{
    position: Vector3.create(33.75,42.35,42),
    scale: Vector3.create(12,12,12),
    rotation: Quaternion.fromEulerDegrees(90,0,270)
  })


  let snorlaxCollider = engine.addEntity()

  MeshCollider.setBox(snorlaxCollider)

  Transform.create(snorlaxCollider,{
    position: Vector3.create(34,41.5,42),
    scale: Vector3.create(6,9,3),
    rotation: Quaternion.fromEulerDegrees(90,0,270)
  })

  let xWing = engine.addEntity()

  GltfContainer.create(xWing,{
    src: 'models/xWing.glb'
  })
  
  Transform.create(xWing,{
    position: Vector3.create(34,48,30),
    scale: Vector3.create(8,8,8),
    rotation: Quaternion.fromEulerDegrees(310,315,180)
  })

  let arWing = engine.addEntity()


  GltfContainer.create(arWing,{
    src: 'models/arWing.glb'
  })
  
  Transform.create(arWing,{
    position: Vector3.create(24,48,46),
    scale: Vector3.create(12,12,12),
    rotation: Quaternion.fromEulerDegrees(30,300,60)
  })

  let masterSword = engine.addEntity()

  GltfContainer.create(masterSword,{
    src:'models/masterSword.glb'
  })
  
  Transform.create(masterSword, {
    position: Vector3.create(18,40,40),
    scale: Vector3.create(0.5,0.5,0.5),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })


  let masterSwordCollider = engine.addEntity()

  MeshCollider.setBox(masterSwordCollider)
  
  Transform.create(masterSwordCollider, {
    position: Vector3.create(18.2,40.5,40),
    scale: Vector3.create(0.5,1.75,0.5),
    rotation: Quaternion.fromEulerDegrees(0,0,0)
  })

  let mongePuzzle3 = engine.addEntity()

  GltfContainer.create(mongePuzzle3, {
    src: 'models/vista3.glb'
  })

  Transform.create(mongePuzzle3, {
    position: Vector3.create(24,39.5,32),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })
  
  let mongePuzzleKey3 = engine.addEntity()

  GltfContainer.create(mongePuzzleKey3, {
    src: 'models/puzzleKey.glb'
  })

  Transform.create(mongePuzzleKey3, {
    position: Vector3.create(34,39.5,48),
    scale: Vector3.create(0.75,0.75,0.75)
  })

  PointerEvents.create(mongePuzzleKey3, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Collect"
      }
    }
  ]})

  let monge3FrontView = engine.addEntity()
 
  GltfContainer.create(monge3FrontView, {
    src: 'models/frame3frontView.glb'
  })

  Transform.create(monge3FrontView, {
    position: Vector3.create(36,46.5,17.5),
    scale: Vector3.create(1.5,1.5,1.5),
    rotation: Quaternion.fromEulerDegrees(90,0,0)
  })

  let monge3SideView = engine.addEntity()
   
  GltfContainer.create(monge3SideView, {
    src: 'models/frame3sideView.glb'
  })

  Transform.create(monge3SideView, {
    position: Vector3.create(5,41.5,24),
    scale: Vector3.create(1,1,1),
    rotation: Quaternion.fromEulerDegrees(90,90,0)
  })

  let monge3TopView = engine.addEntity()

  GltfContainer.create(monge3TopView, {
    src: 'models/frame3topView.glb'
  })

  Transform.create(monge3TopView, {
    position: Vector3.create(36,57.25,44),
    scale: Vector3.create(2,2,2),
    rotation: Quaternion.fromEulerDegrees(0,180,180)
  })

  let mongePuzzle3Spot1 = engine.addEntity()

  MeshCollider.setBox(mongePuzzle3Spot1)

  Transform.create(mongePuzzle3Spot1, {
    position: Vector3.create(24,41,32),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  PointerEvents.create(mongePuzzle3Spot1, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle3Spot2 = engine.addEntity()

  MeshCollider.setBox(mongePuzzle3Spot2)

  Transform.create(mongePuzzle3Spot2, {
    position: Vector3.create(25.5,41,32),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  PointerEvents.create(mongePuzzle3Spot2, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle3Spot3 = engine.addEntity()

  MeshCollider.setBox(mongePuzzle3Spot3)

  Transform.create(mongePuzzle3Spot3, {
    position: Vector3.create(25.5,41,30.5),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  PointerEvents.create(mongePuzzle3Spot3, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle3Spot4 = engine.addEntity()

  MeshCollider.setBox(mongePuzzle3Spot4)

  Transform.create(mongePuzzle3Spot4, {
    position: Vector3.create(25.5,41,33.5),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  PointerEvents.create(mongePuzzle3Spot4, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  let mongePuzzle3Spot5 = engine.addEntity()

  MeshCollider.setBox(mongePuzzle3Spot5)

  Transform.create(mongePuzzle3Spot5, {
    position: Vector3.create(24,42.5,33.5),
    scale: Vector3.create(0.75,0.75,0.75),
    rotation: Quaternion.fromEulerDegrees(0,180,0)
  })

  PointerEvents.create(mongePuzzle3Spot5, { pointerEvents: [
    {
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Put key"
      }
    },{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_PRIMARY,
        showFeedback: false,
        hoverText: "Remove key"
      }
    }
  ]})

  engine.addSystem(() => {
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzleKey3)){
      console.log('COLLECTED KEY 3')
      engine.removeEntity(mongePuzzleKey3)
      keysCollected++
      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle3Spot1) && keysCollected == 1){
      console.log('PLACED KEY 3 ON PUZZLE 3')
      
      GltfContainer.create(mongePuzzle3Spot1, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--

      playPuzzleSolvedSFX(mongePuzzle3)
      AudioSource.deleteFrom(museum)
      movePlayerTo({
        newRelativePosition: Vector3.create(24,70,38),
        cameraTarget: Vector3.create(24, 70, 8),})
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle3Spot1) && keysCollected == 0){
      console.log('COLLECTED KEY 3')
    
      GltfContainer.deleteFrom(mongePuzzle3Spot1)
      resetPuzzleSolvedSFX(mongePuzzle3)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle3Spot2) && keysCollected == 1){
      console.log('PLACED KEY 3 ON PUZZLE 3')
      
      GltfContainer.create(mongePuzzle3Spot2, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle3Spot2) && keysCollected == 0){
      console.log('COLLECTED KEY 3')
    
      GltfContainer.deleteFrom(mongePuzzle3Spot2)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle3Spot3) && keysCollected == 1){
      console.log('PLACED KEY 3 ON PUZZLE 3')
      
      GltfContainer.create(mongePuzzle3Spot3, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle3Spot3) && keysCollected == 0){
      console.log('COLLECTED KEY 3')
    
      GltfContainer.deleteFrom(mongePuzzle3Spot3)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }
   
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle3Spot4) && keysCollected == 1){
      console.log('PLACED KEY 3 ON PUZZLE 3')
      
      GltfContainer.create(mongePuzzle3Spot4, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle3Spot4) && keysCollected == 0){
      console.log('COLLECTED KEY 3')
    
      GltfContainer.deleteFrom(mongePuzzle3Spot4)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }

    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, mongePuzzle3Spot5) && keysCollected == 1){
      console.log('PLACED KEY 3 ON PUZZLE 3')
      
      GltfContainer.create(mongePuzzle3Spot5, {
        src: 'models/puzzleKey.glb'
      })
      keysCollected--
      
      console.log("Keys collected: " + keysCollected)
    }
    if (inputSystem.isTriggered(InputAction.IA_PRIMARY, PointerEventType.PET_DOWN, mongePuzzle3Spot5) && keysCollected == 0){
      console.log('COLLECTED KEY 3')
    
      GltfContainer.deleteFrom(mongePuzzle3Spot5)
      keysCollected++

      console.log("Keys collected: " + keysCollected)
    }
  })

  let uAToken = engine.addEntity()

  GltfContainer.create(uAToken, {
    src: 'models/UAtoken.glb'})

  Transform.create(uAToken,{
    position: Vector3.create(24, 61, 24),
    scale: Vector3.create(0.25,0.25,0.25)
  })

  let tokenCollider = engine.addEntity()

  MeshCollider.setBox(tokenCollider)

  Transform.create(tokenCollider,{
    position: Vector3.create(24, 61, 24),
  })

  PointerEvents.create(tokenCollider,{
    pointerEvents: [{
      eventType: PointerEventType.PET_DOWN,
      eventInfo: {
        button: InputAction.IA_POINTER,
        showFeedback: false,
        hoverText: "Collect"
      }}]})

  engine.addSystem(()=>{
    if (inputSystem.isTriggered(InputAction.IA_POINTER, PointerEventType.PET_DOWN, tokenCollider)){
      console.log('COLLECTED TOKEN')
      
      setupCongratulationsMessage()
      triggerEmote({predefinedEmote: 'robot'})
      GltfContainer.deleteFrom(uAToken)
      MeshCollider.deleteFrom(tokenCollider)
      playVictorySFX(museum)
    }}) 

}

function playPuzzleSolvedSFX(entity: Entity) {
  AudioSource.create(entity, {
    audioClipUrl: 'sounds/PuzzleSolved.mp3',
    loop: false,
    playing: true,
  })
}

function resetPuzzleSolvedSFX(entity: Entity) {
  AudioSource.deleteFrom(entity)
}


function playVictorySFX(entity: Entity) {
  AudioSource.create(entity, {
    audioClipUrl: 'sounds/stageComplete.mp3',
    loop: false,
    playing: true,
  })
}

