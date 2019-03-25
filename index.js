const tabs = function(el, data, options) {
	if (!options) {
		const options = {
			toggleMethod: 'display'
		}
	}

	const name = data.tab
	const container = query('#menu a').element

	const selectTabByName = function(name) {
		return document.getElementById(name)
	}

	const closeExcept = function(name) {
		try {
			for (let i = 0; i < container.length; i++) {
				if (container[i].dataset.tab !== name) {
					const tab = selectTabByName(container[i].dataset.tab)
					hide(tab)
				}
			}
		} catch(e) {
			throw new Error(e)
		}
	}

	const show = function(tab) {
		if (!tab) {
			throw new Error('invalid argument')
		}
		tab.style.display = 'block'
	}

	const hide = function(tab) {
		if (!tab) {
			throw new Error('invalid argument')
		}

		tab.style.display = 'none'
	}

	const open = function() {
		try { 
    		closeExcept(name)
    		show(document.getElementById(name))
    	} catch(e) {
    		throw new Error(e)
    	}
	}
	
	return {
		open: open,
		closeExcept: closeExcept
	}
}