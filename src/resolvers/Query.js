const Query = {
  dogs(parent, args, ctx, info) {
    return [{name: 'Dogs name'}, {name: 'Another name'}]
  }
};

module.exports = Query;
