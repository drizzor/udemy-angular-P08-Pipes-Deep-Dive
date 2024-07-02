import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true,
})
export class TemperaturePipe implements PipeTransform {
    // constructor(private decimalPipe: DecimalPipe) { }

    transform(value: string | number) {
        let val: number;

        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }
        const outputTemp = val * (9 / 5) + 32; // Convert to Fahrenheit

        return `${outputTemp.toFixed(2)} °F`;
    }
}