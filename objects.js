var playlist = { 
  Logic: "Bounce",
  H_E_R: "U",
  Jhene_Aiko: "Sativa"
}

function updatePlaylist(list, name, song){
  return Object.assign({}, list, {name: song})
}

function removeFromPlaylist(obj, name){
  delete obj.name
  return obj
}