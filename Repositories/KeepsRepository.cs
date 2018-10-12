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
        public IEnumerable<Keep> GetById(string userid)
        {
            return _db.Query<Keep>("SELECT * FROM keeps WHERE userid = @userid;", new { userid });
        }

        //GET KEEP BY VAULTID
        public IEnumerable<Keep> GetByVaultId(int vaultId)
        {
            return _db.Query<Keep>("SELECT * FROM vaultkeeps vk INNER JOIN keeps k ON k.id = vk.keepId  WHERE (vaultId = @vaultId);", new { vaultId });
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
        UPDATE keeps
        SET name = @Name, description = @Description, img = @Img, isPrivate = @IsPrivate, keeps = @Keeps, views = @Views
        WHERE id = @Id", keep);
        return keep;
        }

        //DELETE KEEP
        public void Delete(int id)
        {
            _db.Execute("DELETE FROM keeps WHERE id = @id", new { id });
        }

        //VaultKeeps Create
        public VaultKeep CreateVaultKeep(VaultKeep vk)
        {
            int id = _db.ExecuteScalar<int>(@"INSERT INto vaultkeeps (userId, vaultId, keepId)
            VALUES (@UserId, @VaultId, @KeepId); 
            SELECT LAST_INSERT_ID();", vk);
            vk.Id = id;
            return vk;
        }

        //vaultkeeps get
        public IEnumerable<VaultKeep> GetAllVaultKeeps()
        {
            return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps;");
        }
        //VaultKeeps DELETE
        public void DeleteVaultKeep(int keepId, int vaultId)
        {
            _db.Execute("DELETE FROM vaultkeeps WHERE vaultId = @vaultId AND keepId = @keepId", new { keepId, vaultId });
        }
    }
}