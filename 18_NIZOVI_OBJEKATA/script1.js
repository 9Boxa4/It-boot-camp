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

let blog4 =
{
    title: `If naredba grananja`,
    likes: 150,
    dislikes: 50,
};

let blog5 =
{
    title: `Uvod u JavaScript`,
    likes: 250,
    dislikes: 160,
};


user1=
{
    username: 'Jelena Matejic',
    age :27,
    blogs: [blog1,blog2, blog3],
    myLikes: function ()
    {
        let sum=0;
        this.blogs.forEach(el=>
            {
                sum += el;
            });
            return sum;
    },
};

user2 =
{
    username: `Stefan Stanimirovic`,
    age: 32,
    blogs:[blog4,blog5],
    myLikes:function ()
    {
        let sum=0;
        this.blogs.forEach(el=>
            {
                sum += el;
            });
            return sum;
    },
};

//ispis
console.log(user1.username);

//Podaci o prvom blogu korisnika 1

console.log(user1.blogs[0]);

//Naslov prvog bloga korisnika 1

console.log(user1.blogs[0].title);

//niz korisnika
//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1, user2];

//ko su autori blogova

users.forEach(u =>
    {
        console.log(u.username);
    });


    // ispisati sve naslove blogove koje su napisali autori iz niza users

    users.forEach(u=>
        {
            // U je jedan user iz niza
            let blogsU = u.blogs; // ovo su svi blogovi tekuceg korisnika
            blogsU.forEach(b=>
                {
                    console.log(b.title);
                })
        });


       console.log(`spisati imena onih autora koji imaju ispod 30 godina`); 

       users.forEach(u=>
        {
            if(u.age < 30)
            {
                console.log(u.username);
            }
        });

        console.log(`spisati naslove onih blogova koji imaju više od 50 lajkova
        `);

        users.forEach(u=>
            {
                let blogsU=u.blogs; // niz blogova korisnika u
                blogsU.forEach(el=>
                    {
                        if(el.likes>50)
                        {
                            console.log(el.title);
                        }
                    });
            });

            console.log(`Ispisati sve blogove autora čiji je username ’Stefan Stanimirovic’
            `);
            //let users = [user1, user2];

            users.forEach(u=>
                {
                    if(u.username == `Stefan Stanimirovic`)
                    {
                        let blogsU=u.blogs;
                        blogsU.forEach(el=>
                            {
                                console.log(el.title);
                            });
                    };
                });


                //Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali

                // prvi nacin
               users.forEach(u=>
                {
                    let sumaLajkovazaU=0; // suma lajkova jednog user-a
                    //krecem se od bloga do bloga korisnika u
                    u.blogs.forEach(b=>
                        {
                            sumaLajkovazaU += b.likes;
                        });
                        if(sumaLajkovazaU > 200)
                        {
                            console.log(u.username);
                        }
                });

                // drugi nacin

                   users.forEach(u=>
                    {
                        if(u.myLikes()>200)
                        {
                            console.log(u.username);
                        }
                    }) ;

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
// jelena likes: 30,50,70(avg. likes (30+50+70)/3=50 )
//Stefan likes: 150,250(avg likes (150 + 250)/2 = 200)
//Globalni prosek (30+50,70,150,250)/5 = 110
// NIJE ISTO sto i (Jelenin + Stefanov prosek lajkova) / 2 = 125

               
let globalAvgLikes = arr=>
{
    let globalSum=0;//suma svih lajkova svih korisnika
    let globalBr=0; // Broj blogoba svih korisnika
    arr.forEach(u=>
        {
            globalSum += u.myLikes();// dodaj koliko je pojedinacni korisnik imao ukupno lajkova za sve svoje blogove
            globalBr += u.blogs.length; // Dodaj koliko je pojedinacni korisnik imao blogova
        });
        return globalSum/globalBr;

};

console.log(`globalni prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviNatLikes = arr =>
{
    let globAvg = globalAvgLikes(arr);
    arr.forEach(u =>
        {
            u.blogs.forEach(b=>
                {
                    if(b.likes > globAvg)
                    {
                        console.log(b.title);
                    }
                });
        });
}
console.log(`Ispis naslova sa natprosecnim brojem lajkova`);
console.log(blogoviNatLikes(users));