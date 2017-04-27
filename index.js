function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  let lists = document.getElementsByClassName('ranked-list')

  for(let i = 0, ul; ul = lists[i]; i++) {
    let kids = ul.children
    for(let i = 0, li; li = kids[i]; i++) {
      let current = parseInt(li.innerHTML)
      li.innerHTML = current + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node

  // grandChildren = document.getElementById('grand-node').querySelectorAll('div')
  // for(let i = 0, child; child = grandChildren[i]; i++) {
  //   if ( !child.children.length ) {
  //     return child
  //   }
  // }
}
