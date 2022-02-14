


let blog1 = 
{
    title: `Osnovni HTML tagovi`,
    likes: 30,
    dislikes: 9,
};

let blog2 =
{
    title: `Osnovni CSS selektori!`,
    likes: 70,
    dislikes: 5,
};


let blog3 =
{
    title: `Napredni CSS selektori`,
    likes: 50,
    dislikes: 60,
};

let arrBlogs = [blog1,blog2,blog3];

arrBlogs.forEach(obj=>
    {
        console.log(obj);
    });

    arrBlogs.forEach(obj=>
        {
            document.body.innerHTML +=` <h3>${obj.title}</h3>`;
            document.body.innerHTML += `<p>Likes ${obj.likes}</p>`
            document.body.innerHTML += `<p>dislikes ${obj.dislikes}</p>`
        });

        // ispis objekata iz niza pomocu for petlje
        for(let i=0; i<arrBlogs.length; i++)
        {
            console.log(arrBlogs[i]);
            console.log(arrBlogs[i].title);
        };



        // promena vrednosti elementa 

        // blog3.title = `Napredni HTML tagovi`;
        // console.log(arrBlogs);
        // arrBlogs[2].title = `HTML5 tagovi`;
        // console.log(arrBlogs);


        ////////////////////////////////////////////////////////////////
        //                              VEZBANJE      /////



        //napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova

        //1. nacin
        
        let sumLikes = arr =>
        {
            let sum =0;
            arr.forEach(blog=>
                {
                    sum += blog.likes;
                });
                return sum;
        }
        //2 nacin
        // for(let i=0; i<arr.length; i++)
        // {
        //     sum += arr[i].likes;
        // }
        // return sum
    // }
        console.log(sumLikes(arrBlogs));

        //lajkovi iz prvog i treceg bloga

        let sum3= arrBlogs[0].likes + arrBlogs[2].likes;
        console.log(sum3);


        //2 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena


        //3. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

        //log
        // likes > dislikes

        let moreLikes = arr =>
        {
            arr.forEach(el=>
                {
                    if(el.likes > el.dislikes)
                    {
                        console.log(el.title);
                    }
                   
                    
                });
        }

        console.log(`Blogovi sa vise lajkova nego displajkova`);
      moreLikes(arrBlogs);


      //  2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova


    //  let prosBr = (arr,cb) =>
    //   {
    //        let suma = cb(arr)
    //       let br=0;
    //       arr.forEach(el=>
    //         {
    //             br++;
    //         });
    //         return suma/br;
    //   }


    //   console.log(prosBr(arr.Blogs,sumLikes));

    let prosBr = arr =>
    {
        let br=0;
        let sum=0;
        arr.forEach(el=>
            {
                br++;
                sum+= el.likes;
            });
            return sum/br;
    }

    console.log(prosBr(arrBlogs));

    //Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

 let najmanjeDuplo = arr =>
 {
     arr.forEach(el=>
        {
            if(el.likes*2 >= el.dislikes)
            {
                console.log(el.title);
            }
        });
 }

console.log(`Blogovi koji imaju najmanje duplo lajkova od dislajkova su`);
 najmanjeDuplo(arrBlogs);


 //Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom


 Uzvicnik = arr =>
 {
     arr.forEach(el=>
        {
            // if('!' == el.title.charAt(el.title.length-1))
            if('!' == el.title[el.title.length-1])
            {
                console.log(el.title);
            }
        })
 }
console.log(`Title-ovi koji imaju na kraju uzvicnik`);
 Uzvicnik(arrBlogs);

