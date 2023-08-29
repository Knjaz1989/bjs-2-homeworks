class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	getCurrentFormattedTime(){
		let date = new Date();
		let hours = String(date.getHours()).padStart(2, "0");
		let minutes = String(date.getMinutes()).padStart(2, "0")
		return `${hours}:${minutes}`;
	}

	addClock(time, callback) {
		if (!time || !callback){
			throw new Error('Отсутствуют обязательные аргументы');
		}
		let splitedTime = time.split(":");
		let numberHours = Number(splitedTime[0]);
		let numberMinutes = Number(splitedTime[1]);
		if (!numberHours || !numberMinutes){
			return "Время должно соответствовать формату HH:MM";
		} else if ((numberHours > 23 || numberHours < 0) || (numberMinutes > 59 || numberMinutes < 0)){
			return "Время должно быть в правильном диапазоне";
		}
		if (this.alarmCollection.some(value => value.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		} 
		this.alarmCollection.push(
			{
				callback, 
				time, 
				canCall: true,
			}
		);
	}

	removeClock (time){
		this.alarmCollection = this.alarmCollection.filter(
			value => value.time !== time
		);
	}

	start (){
		if (this.intervalId){
			return "Интервал уже создан";
		}
		this.intervalId = setInterval(
			() => {
				this.alarmCollection.forEach(
					value => {
						if (value.time === this.getCurrentFormattedTime() && value.canCall){
							value.canCall = false;
							value.callback();
						}
					}
				);
			},
			1000
		);
	}

	stop (){
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls (){
		this.alarmCollection.forEach(
			value => {
				value.canCall = true;
			}
		);
	}

	clearAlarms (){
		this.stop();
		this.alarmCollection = [];
	}
}