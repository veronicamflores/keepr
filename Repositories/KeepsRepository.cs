using System.Collections.Generic;
using System.Data;
using System.Linq;
using keepr.Models;
using Dapper;

namespace keepr.Repositories
{

    public class KeepsRepository
    {
        private IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        //CRUD VIA SQL

        //GET ALL KeepS
        public IEnumerable<Keep> GetAll()
        {
            return _db.Query<Keep>("SELECT * FROM keeps;");
        }

        //GET KEEP BY ID
        public Keep GetById(int id)
        {
            return _db.Query<Keep>("SELECT * FROM keeps WHERE id = @id;", new { id }).FirstOrDefault();
        }

        //CREATE KEEP
        public Keep Create(Keep keep)
        {
            int id = _db.ExecuteScalar<int>(@"
        INSERT INTO keeps (name, description, img, isPrivate, keeps, views, shares, userId )
        VALUES (@Name, @Description, @Img, @IsPrivate, @Keeps, @Views, @Shares, @UserId);
        SELECT LAST_INSERT_ID();", keep
            );
            keep.Id = id;
            return keep;
        }

        //UPDATE KEEP
        public Keep Update(Keep keep)
        {
            _db.Execute(@"
      UPDATE keeps SET (name, description, img, isPrivate, keeps, views, shares, userId) 
      VALUES (@Name, @Description, @Img, @IsPrivate, @Keeps, @Views, @Shares, @UserId)
      WHERE id = @Id
      ", keep);
            return keep;
        }

        //DELETE KEEP
        public Keep Delete(Keep keep)
        {
            _db.Execute("DELETE FROM keeps WHERE id = @Id", keep);
            return keep;
        }
    }
}