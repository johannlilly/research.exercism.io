// @ts-check

/**
 * Re-arranges the input array by moving an item from one position to another position.
 * Does not mutate the input array.
 *
 * @template T
 *
 * @param {T[]} array the input array
 * @param {number} from the position to move from
 * @param {number} to the position to move to
 *
 * @returns {T[]}
 */
export function arrange(array, from, to) {
  // throw new Error('Implement the arrange function');
  let arranged = [...array];
  let fromIndex = from < 0 ? array.length + from : from; // 4
  let toIndex = to < 0 ? array.length + to : to;

	if (toIndex >= fromIndex) {
		arranged.splice(toIndex + 1, 0, array[fromIndex]);
		arranged.splice(fromIndex, 1);
	} else {
		arranged.splice(toIndex, 0, array[fromIndex]);
		arranged.splice(fromIndex + 1, 1);
	}

  return arranged;
}

/**
 * Re-arranges the input array by moving an item from one position to another position.
 * Mutates the input array.
 *
 * @template T
 *
 * @param {T[]} array the input array
 * @param {number} from the position to move from
 * @param {number} to the position to move to
 *
 * @returns {T[]}
 */
export function rearrange(array, from, to) {
	// throw new Error('Implement the rearrange function');
  let fromIndex = from < 0 ? array.length + from : from;
  let toIndex = to < 0 ? array.length + to : to;

	if (toIndex >= fromIndex) {
		array.splice(toIndex + 1, 0, array[fromIndex]);
		array.splice(fromIndex, 1);
	} else {
		array.splice(toIndex, 0, array[fromIndex]);
		array.splice(fromIndex + 1, 1);
	}

  return array;
}
