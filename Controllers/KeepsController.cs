using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeepsController : Controller
    {
        KeepsRepository _repo;
        public KeepsController(KeepsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("{userid}")]
        public IEnumerable<Keep> Get(string userid)
        {
            return _repo.GetById(userid);
        }
        [HttpGet("vault/{id}")]
        public IEnumerable<Keep> Get(int id)
        {
            return _repo.GetByVaultId(id);
        }
        [HttpGet("vaultkeeps/")]
        public IEnumerable<VaultKeep> GetVaultKeeps()
        {
            return _repo.GetAllVaultKeeps();
        }

        [HttpPost]
        public Keep Post([FromBody] Keep keep)
        {
            if (ModelState.IsValid)
            {
                keep = new Keep(keep.Name, keep.Description, keep.Username, keep.Img, keep.UserId, keep.IsPrivate);
                return _repo.Create(keep);
            }
            throw new Exception("INVALID KEEP");
        }

        [HttpPost("{vaultkeeps}")]
        public VaultKeep PostVaultKeep([FromBody] VaultKeep vk)
        {
            if (ModelState.IsValid)
            {
                vk = new VaultKeep(vk.UserId, vk.KeepId, vk.VaultId);
                return _repo.CreateVaultKeep(vk);
            }
            throw new Exception("Invalid VaultKeep");
        }

        [HttpPut("{id}")]
        public Keep Put(int id, [FromBody] Keep keep)
        {
            keep.Id = id;
            return _repo.Update(keep);
        }

        [HttpDelete("vaultkeeps/{keepid}/{vaultId}")]

        public void DeleteVaultKeeps(int keepId, int vaultId)
        {
            _repo.DeleteVaultKeep(keepId, vaultId);
        }

        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            _repo.Delete(id);
        }

    }

}