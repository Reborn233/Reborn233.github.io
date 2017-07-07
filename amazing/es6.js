	static find(query) {
	    // this.all() 会取出数组中的所有数据
	    return this.all().filter(item => Object.keys(query).every(key => item[key] === query[key]))
	}