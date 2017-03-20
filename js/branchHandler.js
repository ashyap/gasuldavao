function initializeSelectBranchTag(){
  var branchesContainer = document.getElementById('branch')
  for(var i = 0; i < branches.length; i++){
    var branch = branches[i]
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(branch.branch));
    branchesContainer.appendChild(option)
  }
}


function renderSelectedBranch(){
  var branch = document.getElementById('branch').value
  var branchInfo = getBranchInfo(branch)

  var telNoLabel = document.getElementById('telNo')
  telNoLabel.innerHTML = branchInfo.telephone
  
  var workingHoursLabel = document.getElementById('workingHours')
  workingHoursLabel.innerHTML = branchInfo.workingHours.toLocaleString()

  var workingDaysLabel = document.getElementById('workingDays')
  workingDaysLabel.innerHTML = branchInfo.workingDays.toLocaleString()

}

function getBranchInfo(branch){
  for(var i = 0; i < branches.length; i++){
    if(branches[i].branch == branch){
      return branches[i ]
    }
  }
}
