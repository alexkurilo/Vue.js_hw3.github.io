var Cat = ({
	props:["pathone"],
	template: `
		<div >
			<img class="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_rnRQ83hnOJASreFdIiYl5lq5CmlmO1n1ydm4qS6c0TU8oVv"/>
		</div>
	`,
		
})
var Dog = ( {
	props:["pathone"],
	template: `
		<div >
			<img class="picture" src="http://cdn.playbuzz.com/cdn/35faa53e-b6a7-4726-be34-2d3ebafab58e/44421d0b-06bd-4785-81d1-d72cd280a984.jpg"/>
		</div>
	`,
})

var Monkey = ( {
	props:["pathone"],
	template: `
		<div >
			<img class="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o_VGpsHK2aUS6AY6dsNZqREMrKQPiu90LX4XRaTtJpXXI86y"/>
		</div>
	`,
})

var Pets = ({
	props:["pathone"],
	template:`
		<div class="menu_item">
			<div class="wrap">	
				<router-link class="link menu" :to="{ name: 'dog'}">
					DOG
				</router-link>
			</div>
			<div class="wrap">	
				<router-link class="link menu" :to="{ name: 'cat'}">
					CAT
				</router-link>
			</div>
			<div class="wrap">	
				<router-link class="link menu" :to="{ name: 'monkey'}">
					MONKEY
				</router-link>
			</div>
			<router-view></router-view>
		</div>
	`,
})