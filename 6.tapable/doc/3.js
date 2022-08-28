let obj = {
  for() {
    return {
      tap() {
        
        return {
          trigger() {
            console.log('trigger');
          }
        }
      }
    }
  }
}
obj.for().tap().trigger();