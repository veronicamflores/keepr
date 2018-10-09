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

        //GET KEEP BY VAULTID
        public IEnumerable<Keep> GetByVaultId(int vaultId)
        {
            return _db.Query<Keep>("SELECT * FROM vaultkeeps vk INNER JOIN keeps k ON k.id = vk.keepId  WHERE (vaultId = @VaultId); ");
        }

        //CREATE KEEP
        public Keep Create(Keep keep)
        {
            int id = _db.ExecuteScalar<int>(@"
        INSERT INTO keeps (name, description, img, isPrivate, keeps, views, shares, userId )
        VALUES (@Name, @Description, @Img, @IsPrivate, @Keeps, @Views, @Shares, @UserId);
        SELECT LAST_INSERT_ID();", keep);
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

        //VaultKeeps Create
        public VaultKeep CreateVaultKeep(VaultKeep vk){
            int id = _db.ExecuteScalar<int>(@"INSERT INto vaultkeeps (userId, vaultId, keepId)
            VALUES (@UserId, @VaultId, @KeepId); 
            SELECT LAST_INSERT_ID();", vk );
            vk.Id = id;
            return vk;
        }

        //VaultKeeps DELETE
        public VaultKeep Delete(VaultKeep vk)
        {
            _db.Execute("DELETE FROM vaultkeeps WHERE id = @Id", vk);
            return vk;
        }
    }
}