/**
* WishList.js
*
* @description :: Model pour la liste de souhait, wishList de l'application
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName:"wishlist",

  attributes: {

      name: {
          type: 'string',
          defaultsTo: 'Nouvelle Liste de souhaits'
      },
      wishes:'array',
      event:{
          model:'event'
      }

  }
};

