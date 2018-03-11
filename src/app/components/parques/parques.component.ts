import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core'; 
import { fadeIn } from "../animation";

@Component({
	selector : 'parques',
	templateUrl: './parques.component.html',
	styleUrls: ['./parques.component.css'],
	animations:[fadeIn]
})

export class ParquesComponent implements OnInit, OnChanges, OnDestroy{
	@Input() public nombre;
	@Input('metros_cuadrados') public metros;
	public vegetacion;
	public abierto;

	@Output() pasameLosDatos = new EventEmitter();
	constructor(){
		this.nombre = 'Parque natural para caballos';
		this.metros = 450;
		this.vegetacion = 'alta';
		this.abierto = true;
	}

	ngOnInit(){
		console.log('Metodo On Init Lanzado');
	}

	ngOnChanges(changes: SimpleChanges){
		console.log('Existen cambios en las propiedades');
		
	}

	ngOnDestroy(){
		console.log('Se va a eliminar el componente');
		
	}
	emitirEvento(){
		this.pasameLosDatos.emit({
			'nombre' : this.nombre,
			'metros' : this.metros, 
			'vegetacion' : this.vegetacion, 
			'abierto' : this.abierto 
		});
	}
}