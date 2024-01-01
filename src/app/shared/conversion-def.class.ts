export class ConversionDef {
      constructor(
            public name: string,

            public coeff: number,
            public preOffset: number,
            public postOffset: number,
            
            public inUint: string,
            public outUint: string,
      ) {}
}