export default class Functions {

	constructor() {
		this.ColumnManager = new ColumnManager
	}


}


class ColumnManager {
	center(columnChild) {
		if ( !this.define(columnChild) ) return;

		let index    = parseInt(this.selectedColumn.data('index'))
		let colwidth = this.selectedColumn.width()
		let viewport = window.innerWidth

		let spacing  = (viewport - colwidth) / 2 - (index * colwidth)

		$('.column').css('transform', `translateX(${spacing}px)`)
	}


	define(columnChild) {
		this.container = $('.dashboard')
		this.selectedColumn = $(columnChild).is('.column') ? $(columnChild) : $(columnChild).parents('.column')

		return this.selectedColumn.length;
	}
}