/**
 * query-like api for handling tabs
 *
 * @param 
 * @param
 * @param    {Object}
 * @returns  {Object}
 */
const tabs = function(el, data, options) {

    if (!options) {
        const options = {
            toggleMethod: 'display'
            datasetNames: {}
        }
    }

    const name = data.tab
    const container = query('#menu a').element

    /**
     * [_selectTabByName description]
     *
     * @var      {String}
     * @private
     * @return   {Node}
     */
    const _selectTabByName = function(name: String) {
        return document.getElementById(name)
    }


    const _show = function(tab: String) {
        if (!tab) {
            throw new Error('invalid argument')
        }
        tab.style.display = 'block'
        return this
    }

    const _hide = function(tab: String) {
        if (!tab) {
            throw new Error('invalid argument')
        }

        tab.style.display = 'none'
        return this
    }

    const closeExcept = function(name) {
        try {
            for (let i = 0; i < container.length; i++) {
                if (container[i].dataset.tab !== name) {
                    const tab = _selectTabByName(container[i].dataset.tab)
                    hide(tab)
                }
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    const open = () => {
        try {
            closeExcept(name)
            _show(document.getElementById(name))
        } catch (e) {
            throw new Error(e)
        }
    }

    const close = () => {
        try {
            _hide(document.getElementById(name))
        } catch (e) {
            throw new Error(e)
        }
    }

    const closeAll = () => {}

    return {
        open: open,
        closeExcept: closeExcept,
        close: close
    }
}