//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = md5(args);
    let foundedHashObject = cache.find(value => value.hash === hash);
    if (foundedHashObject){
        return `Из кеша: ${foundedHashObject.value}`
    }
    result = func(...args);
    if (cache.length == 5){
        cache.splice(0, 1);
    }
    cache.push({hash, value: result});
    return `Вычисляем: ${result}`;
  }

  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
      if (!timeoutId){
          func(...args);
          wrapper.count += 1;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
          () => {
              wrapper.count += 1;
              func(...args);
          }, delay
      );
      wrapper.allCount += 1;
  }

  return wrapper;
}
