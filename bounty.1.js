function most_cccurring_numbers(items)
{
	//Default variables.
	var rVal = 1, item , count = i = 0, j;
	items.push('');
	//Loop as row and col.
	for (i; i < items.length; i++) {
		for (j = i; j < items.length; j++) {
			console.log('i ' + items[i]);
			console.log('j ' + items[j]);
			//Determine either i == j?
			if (items[i] == items[j]) {
				count++;
			} else if (rVal < count) {
				rVal = count;
				item = items[i];
			}
		}
		count = 0;
	}
	return {
		'item': item,
		'count': rVal,
	};
}


//Example one
//console.log(most_cccurring_numbers([1, 3, 3,4]));
//Example two
//console.log(most_cccurring_numbers([1, 2, 3, 4, 3]));
