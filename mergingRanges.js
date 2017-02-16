// {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

var input = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

var output = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
]

var mergeRanges = (meetingsArray) => {

	// sort meeting by start times...
	var sortedMeetings = meetingsArray.slice().sort((a,b) => {
		return a.startTime > b.startTime;
	})
	
	var mergedMeetings = [sortedMeetings[0]];

	// loop thru mergedMeetings
	for (var i = 1; i < sortedMeetings.length; i++){
		var currentMeeting = sortedMeetings[i];
		var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
		// compare current w/ previous. if end of 1st is after start of 2nd -> merge the 2,
		// otherwise just throw it into merged meetings...

		if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
			lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
		} else {
			mergedMeetings.push(currentMeeting);
		}

	}
	return mergedMeetings;

};

// O (n log n) time & O(n) space