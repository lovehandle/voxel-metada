var create_game = require('voxel-hello-world')

var game = create_game({
  texturePath: '/img/textures/',
  materialFlatColor: false,
  materials: [
    ['grass', 'dirt', 'grass_dirt'],
    'cfa'
  ],
  playerSkin: '/img/player.png',
  generateVoxelChunks: false,
  chunkDistance: 1
})

var cfapos   = [0,1,0]
game.setBlock(cfapos, 'cfa')

var metadata     = document.getElementById('meta-data')
var showmetadata = document.getElementById('meta-data-show')
var editmetadata = document.getElementById('meta-data-edit')

window.addEventListener('keydown', function (ev) {
  if (ev.keyCode === 'E'.charCodeAt(0)) {

    if (editmetadata.style.display === 'block') {
      editmetadata.style.display = 'none'
      showmetadata.style.display = 'block'
    } else {
      editmetadata.style.display = 'block'
      showmetadata.style.display = 'none'
    }

  }
})

game.highlighter.on('highlight', function (pos) {
  if (!(pos<cfapos || cfapos<pos)) {
    metadata.style.display = 'block';
  }
})

game.highlighter.on('remove', function (pos) {
  if (!(pos<cfapos || cfapos<pos)) {
    metadata.style.display = 'none';
  }
})

window.game = game
