export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const endpointCount = weakMap.get(endpoint);
    if (endpointCount >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, endpointCount + 1);
  }
};
