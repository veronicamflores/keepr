using System.Collections.Generic;
using System.Data;
using System.Linq;
using keepr.Models;
using Dapper;

namespace keepr.Repositories
{

    public class VaultsRepository
    {
        private IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        //CRUD VIA SQL

        //GET ALL Vaults
        public IEnumerable<Vault> GetAll()
        {
            return _db.Query<Vault>("SELECT * FROM vaults;");
        }

        //GET VAULT BY ID
        public IEnumerable<Vault> GetById(string userid)
        {
            return _db.Query<Vault>("SELECT * FROM vaults WHERE userid = @userid;", new { userid });
        }

        //CREATE VAULT
        public Vault Create(Vault vault)
        {
            int id = _db.ExecuteScalar<int>(@"
        INSERT INTO vaults (name, description, userId)
        VALUES (@Name, @Description, @UserId);
        SELECT LAST_INSERT_ID();", vault);
            vault.Id = id;
            return vault;
        }

        //UPDATE VAULT
        public Vault Update(Vault vault)
        {
            _db.Execute(@"
      UPDATE vaults SET (name, description, userId) 
      VALUES (@Name, @Description, @UserId);
      WHERE id = @Id
      ", vault);
            return vault;
        }

        //DELETE VAULT
        public void Delete(int id)
        {
            _db.Execute("DELETE FROM vaults WHERE id = @id", new {id});
        }

    }

}