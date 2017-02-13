var condenseMeetingTimes = function(arr){
	// return array of obj-times when ANY team is having a meeting

	/*
	Rules:
		Compare 2 schedule objects...
		1. Treat meeting w/ earlier start time as 1st and other one as 2nd
		2. If 1st-end is >= 2nd-start -> merge into 1 meeting (result is 1st-start and whichever end is later)
		3. else leave separate
	*/

	// can't do in 1 pass, so sort and then merge
	var sortedMeetings = arr.sort(function(a,b){
		return a.startTime - b.startTime;
	});

	// var result = [sortedMeetings[0]];

	var mergedMeetings = [sortedMeetings[0]];

	for (var i = 1; i < sortedMeetings.length; i++){
		var second = sortedMeetings[i];
		var first = mergedMeetings[mergedMeetings.length-1];
		if (first.endTime >= second.startTime){
			// merge into 1 meeting
			var finalEndTime = first.endTime > second.endTime ? first.endTime : second.endTime;
			var combined = {startTime: first.startTime, endTime: finalEndTime};
			mergedMeetings.splice(mergedMeetings[mergedMeetings.length-1], 1, combined);
		} else {
			// leave separate
			mergedMeetings.push(second);
			continue;
		}
	}
	return mergedMeetings;
}