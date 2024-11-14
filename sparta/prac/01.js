getNode(index) {
    let node = this.head
    for (let i = 0; i <index; i++) {
        node = node.next;
    }
    return node;
}