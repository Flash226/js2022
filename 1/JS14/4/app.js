const express = require('express');
const serv = express();
serv.set('view engine', 'pug')
const article = 'Lorem ipsum dolor sit amet. Et corporis dolorum et quod alias a facilis explicabo. Non omnis enim At mollitia velit sit atque reiciendis a nobis quibusdam ex repudiandae ipsa. Et dolorem rerum At error adipisci sed magni velit aut officia tenetur ut sint maxime. Ab sint debitis qui officia fugit At modi quia eos dolorem recusandae non ducimus beatae. Et internos voluptas et possimus iste et sequi odio in galisum neque? Est debitis mollitia eos voluptatum nobis et autem assumenda. Et iure reiciendis non explicabo accusantium ea inventore quibusdam quo omnis harum. Non dolore sequi qui corporis asperiores et voluptate iusto. Eum aspernatur eligendi non suscipit cupiditate ab sapiente vero hic voluptas laboriosam a voluptas fugit! Et nobis minima et fuga voluptates At quia ullam eos quis ipsam? Ut maxime distinctio aut dolorem nulla eum consequatur autem. Hic facere fugit est fuga voluptas ad similique dolorem nam ipsum dolorum ex officiis suscipit in ducimus fugiat in modi quia. Rem nihil aperiam eos consequatur quas eum quasi ducimus sed placeat neque est consequuntur illum hic fugit saepe ea accusamus itaque. Aut autem esse sed accusantium suscipit rem necessitatibus reiciendis eos voluptas praesentium et recusandae error vel eius atque. Vel libero similique qui blanditiis saepe et ipsum quae rem rerum earum ut consectetur tenetur id perferendis vero!';

serv.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!', abzac: article })
  });

serv.listen(3000);
