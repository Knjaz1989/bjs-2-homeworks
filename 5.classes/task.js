// task 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = null;
	}

	set state(bookState) {
		if (bookState > 100) {
			this._state = 100;
		} else if (bookState < 0) {
			this._state = 0;
		} else {
			this._state = bookState;
		}
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this._state * 1.5;
	}
}


class Magazine extends PrintEditionItem {
	constructor(...args) {
		super(...args);
		this.type = "magazine";
	}
}


class Book extends PrintEditionItem {
	constructor(author, ...args) {
		super(...args);
		this.author = author;
		this.type = "book";
	}
}


class NovelBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "novel";
	}
}


class FantasticBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "fantastic";
	}
}


class DetectiveBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "detective";
	}
}


// task 2
class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findBook = this.books.find(book => book[type] === value);
		if (!findBook) {
			return null;
		}
		return findBook;
	}

	giveBookByName(bookName) {
		let giveBook = this.findBookBy("name", bookName);
		if (!giveBook) {
			return null;
		}
		this.books.splice(this.books.indexOf(giveBook), 1);
		return giveBook;
	}
}


// task 3
class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (1 < mark && mark < 6) {
			this.marks[subject] ? this.marks[subject].push(mark) : this.marks[subject] = [mark];
		}
	}

	getAverageBySubject(subject) {
		const subjectMarks = this.marks[subject];
		if (!subjectMarks) {
			return 0;
		}
		let marksSum = subjectMarks.reduce(
				(acc, value) => acc + value, 0
			)
		return marksSum / subjectMarks.length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) {
			return 0;
		}
		let allMarksSum = subjects.reduce(
			(acc, value) => acc + this.getAverageBySubject(value) , 0
		);
		return allMarksSum / subjects.length;
	}
}
