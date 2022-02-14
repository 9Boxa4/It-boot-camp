
let a= [1, 9,6, 5, 5];


// function ispis (elem)
// {
//     console.log(`Element niza je : ${elem}`);
// }

// a.forEach(ispis);

// ovo dole je kako treba !!!

// a.forEach(elem =>                     //forEach prihvata callback funkciju
//     {
//         console.log(`Element: ${elem}`);
//     });

//     // Odrediti zbir celobrojnog niza

//     let zbir = (niz) =>{
//         let s=0;
//         niz.forEach(el=>{
//                 s+=el;
//             });
//             return s;
//     };

//     console.log(zbir(a));

    // a.forEach(elem =>                     //forEach prihvata callback funkciju
    //     {
    //         console.log(`Element: ${elem}`);
    //     });
    
        // Odrediti zbir celobrojnog niza
    
        // let zbirParnih = (niz) =>{
        //     let s=0;
        //     niz.forEach(el=>{
        //         if(el % 2 ==0){

                
        //             s+=el;
        //         }
        //         });
        //         return s;
        // };
    
        // console.log(zbirParnih(a));

        // let zbirParnihIndex = (niz) =>{
        //     let s=0;
        //     niz.forEach((el,index)=>{
        //         if(index % 2 ==0){

        //             s+=el;
        //         }
        //         });
        //         return s;
        // };
    
        // // console.log(zbirParnih(a));

        // console.log(zbirParnihIndex(a));

        //Odrediti proizvod elemenata celobrojnog niza.

       // let a= [1, 9,6, 5, 1];
        
        let proizvod = (niz) =>
        {
            let p=1;
            niz.forEach(el =>
                {
                    p*=el;
                })
                return p;
        }

console.log(proizvod(a));



//Odrediti srednju vrednost elemenata celobrojnog niza.


    let arSr = (niz) =>{
        let s=0;
        let br=0;
        niz.forEach(el=>{
                s+=el;
                // br++;
            });
            return niz.length!=0 ? s/niz.length : 0;
    };

   // Odrediti maksimalnu vrednost u celobrojnom nizu.





   let maxy = niz =>
   {
       let max = niz[0];
       niz.forEach(el=>
        {
            if(el>max)
            {
                max=el;
            }
        });
        return max;
   };

   console.log(maxy(a));

//    let maxy = niz =>
//    {
//        let min = niz[0];
//        niz.forEach(el=>
//         {
//             if(el<min)
//             {
//                 min=el;
//             }
//         });
//         return min;
//    };

//    console.log(maxy(a));

   //Marijin primer

//    let maxInd = (niz,cb) =>
//    {
//        let maxEl= cb(niz);
//        let index= 0;
//        niz.forEach((el,i) =>
//        {
//             if(el == maxEl)
//             {
//                 index=i;
//             }
//        });
//        return index;
//    }


//    //Odrediti index max elementa celobrojnog niza

//    let indexmax = niz =>
//    {
//        let max = niz[0];
//        let imax=0;
//        niz.forEach((el,i)=>
//        {
//            if(el>max)
//            {
//                max = el;
//                imax = i;
//            }
//        });
//        return imax;
//    }

//    console.log(indexmax(a));

function maxEl(niz)
{
    let max = niz[0];
    for(let i=1; i<niz.length; i++)
    {
        if(niz[i]>max)
        {
            max=niz[i]
        }
    }
    return max;
}

function minEl(niz)
{
    let min = niz[0];
    for(let i=1; i<niz.length; i++)
    {
        if(niz[i]<min)
        {
            min=niz[i]
        }
    }
    return min;
}

// let indexMaxcallback = (niz) =>
// {
//     let max = maxEl(niz);
//     let imax;
//     niz.forEach((el,i)=>
//     {
//     if(el == max)
//     {
//         imax =i;
//     }
//     });
//     return imax;
// }

// let indexMincallback= niz=>
// {
//     let min=minEl(niz);
//     let imin;
//     niz.forEach((el,i)=>
//     {
//         if(el==min)
//         {
//             imin =i;
//         }
//     });
//     return imin;
// }

//umesto ove dve varijanta pravimo novu funk


let indexSvojstvo = (niz,svojstvo) =>
{
    let s=svojstvo(niz);
    let index;
    niz.forEach((el,i)=>
    {
    if(el == s)
    {
        index =i;
    }
    });
    return index;
}

console.log(indexSvojstvo(a,maxEl));
console.log(indexSvojstvo(a,minEl));

// 24

 a = [56,1,6,7];
let b= [1,2,3,4];

// let mix = (a,b) =>
// {
//     let c= [];

//     for(let i=0; i<a.length; i++)
//     {
//             c.push(a[i]);
//             c.push(b[i]);
//     }
//     console.log(c);
// }
// mix(a,b);

// let c =[1,2,6,2];
// let d = [`a`,`b`,`c`,`e`,`a`,`j`];

// let x = [...c,...d];
// console.log(x);

// console.log(...c);

// let mixPuta = (a,b) =>
// {
//     let c=[];
//     for(let i=0; i<a.length; i++)
//     {
//         c.push(a[i]*b[i])
//     }
//     console.log(c);
// }

// mixPuta(a,b);
// a=[5,2];

// let dvaeses = a =>
// {
//     let b=[];
//     let prim;
//     for(let i=0; i<a.length; i++)
//     {
//         prim[i]=((a[i]+a(a.length-1-i))/2);
//     }
//     b.push(prim);
//     console.log(b);
// }

// dvaeses(a);

// a = [56,1,6,7];
// let b= [1,2,3,4];


//Ispisati dužinu svakog elementa u nizu stringova. 

let strings = [`jedan`, `miljana`, `kutija`,`bajka`];


let ispisstr= niz =>
{
    pack=[];
    niz.forEach(el=>
        {
            // console.log(`ima ` + el.length);
            pack.push(el.length)
        })
        console.log(pack);
}

ispisstr(strings);


//Odrediti element u nizu stringova sa najvećom dužinom.

let maxstr = niz =>
{
    let maxduz=[0];
    niz.forEach(el=>
        {
            if(maxduz<el.length)
            {
                maxduz = el.length;
            }
        })
        console.log(maxduz);
}

maxstr(strings)

