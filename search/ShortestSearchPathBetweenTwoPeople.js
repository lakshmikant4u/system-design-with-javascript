function findPathBiBFS(peopleMap, startIndex, endIndex) {
    let sourceData = new BFSData(peopleMap[startIndex]),
        destData = new BFSData(peopleMap[endIndex]);

    while (!sourceData.isFinished() && !destData.isFinished) {
        let collison = searchLevel(sourceData, destData);
        if (collison !== null) {
            return mergePaths(sourceData, destData);
        }
        collison = searchLevel(destData, sourceData);
        if (collison !== null) {
            return mergePaths(sourceData, destData);
        }
    }

    return null;
}

//Merge two linkedlist 
function mergePaths(firstBfs, secondBfs, collisionId) {
    let end1 = firstBfs.visited.get(collisionId);
    let end2 = secondBfs.visited.get(collisionId);
    let pathOne = end1.collapse(true);
    let pathTwo = end2.collapse(false); //reverse
    pathTwo.deleteHead(); //remove collision node
    pathOne.appendList(pathwo);
    return pathOne;
}

//Search the first level of friends then move to the next level
function searchLevel(primaryBfs, secondaryBfs) {
    let size = primaryBfs.toVisit.length;
    for (var i = 0; i < size; i++) {
        //pop the first node
        let pathNode = primaryBfs.toVisit.shift();
        let personId = pathNode.person.id;
        //get the destination node
        if (secondaryBfs.visited.find(personId) !== undefined) {
            return pathNode.person;
        }

        let person = pathNode.person;
        let friends = person.friends;
        for (var i = 0; i < friends.length; i++) {
            if (!primaryBfs.visited.get(friends[i].id) != undefined) {
                let next = new PathNode(friends[i], pathNode);
                primaryBfs.visited.set(friends[i].id, next);
                primaryBfs.toVisit.push(next);
            }
        }
    }
    return null;
}

class Person {
    constructor() {
        this.friends = [];
        this.id = 0;
    }
}

import HashTable from '../utility/HashTable'
//The data structure contains visited and toVisit list
class BFSData {
    constructor(root) {
        this.toVisit = [];
        this.visited = new HashTable();
        let sourcePath = new PathNode(root, null);
        this.toVisit.push(sourcePath);
        this.visited.set(root.id, sourcePath);
    }

    isFinished() {
        return this.toVisit.length === 0;
    }
}

import LinkedList from '../utility/SingleLinkedList'
class PathNode {
    constructor(person, previous) {
        this.person = person;
        this.previous = previous;
    }
    collapse(startWithRoot) {
        let path = new LinkedList();
        let node = this;
        while (node) {
            if (startWithRoot) {
                path.append(node.person);
            } else {
                path.preppend(node.person);
            }
            node = node.previous;
        }
        return path;
    }
}  