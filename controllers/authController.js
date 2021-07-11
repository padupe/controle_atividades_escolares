const validaEmail = require('email-validator');

const index = async (req, res) => {
  res.send('Auth Route');
};

// const logUser = async (req, res) => {
//     const { email, password } = req.body;

//     switch (true) {
//       case validaEmail.validate(email) == false:
//         // logger.error('Invalid Data!');
//         return res.status(400).json({ error: 'Invalid Data!' });

//       default:
//         try {
//           const user = await findUser('email', email);
//           //Se o e-mail informado estiver incorreto ou não existir cai no IF
//           if (user == null) {
//             logger.error('Invalid Data!');
//             return res.status(401).json({ error: 'Invalid Data!' });
//           }

//           const passwordOK = await compare(password, user.password);

//           switch (true) {
//             case passwordOK == false:
//               logger.error('Invalid Data');
//               return res.status(401).json({ error: 'Invalid Data!' });

//             default:
//               try {
//                 const Token = await generate({ user: user.email });
//                 return res.status(202).json({ tokenJWT: Token });
//               } catch (error) {}
//           }
//         } catch (error) {
//           logger.error(JSON.stringify(error));
//           return res.status(401).json({ error: 'Invalid Data!' });
//         }
//     }
//   };

module.exports = {
  index,
  //   logUser,
};
