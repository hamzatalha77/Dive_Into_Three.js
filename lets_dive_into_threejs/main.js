import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

const mesh = new THREE.Mesh(boxGeometry, material)

scene.add(mesh)

camera.position.z = 5
const planGeometry = new THREE.PlaneGeometry(5, 5, 10, 10)
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide
})
const planeMesh = new THREE.Mesh(planGeometry, planeMaterial)
scene.add(planeMesh)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 1)

scene.add(light)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  // mesh.rotation.x += 0.01
  // mesh.rotation.y += 0.01
  // planeMesh.rotation.x += 0.01
}

animate()
