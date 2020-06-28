var majorityElement = function(nums) {
    let semiLength = Math.floor(nums.length / 2),
      object = {};
  
    for (let item of nums) {
      object[item] = ++object[item] || 1;
  
      if (object[item] > semiLength) return item;
    }
  };