//#Use QuokkaJS: https://quokkajs.com/
const createQueue = () => { // FIFO queue
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item)
    },
    dequeue() {
      return queue.pop()
    },
    peek() { // return the item that's next to be removed
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
console.log(q.length)
q.peek()//?

q.enqueue('Help others learn')
console.log(q.length)
q.peek()//?

q.enqueue('Be happy')
q.peek()//?
q.length /*?*/
q.dequeue()
q.length /*?*/
console.log(q.peek())
