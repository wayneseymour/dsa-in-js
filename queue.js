const createQueue = () => {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      return queue.pop()
    },
    peek() {
      return queue[queue.length - 1]
    },
    get length() {
      return queue.length
    },
    isEmpty() {
      return queue.length == 0
    }
  }
}


const q = createQueue()
console.log(q.isEmpty())

q.enqueue('Make an egghead lesson')
q.enqueue('Help others learn')
q.enqueue('Be happy')

q.length /*?*/
q.dequeue()
q.length /*?*/
console.log(q.peek())
