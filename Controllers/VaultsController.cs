using System;
using System.Collections.Generic;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaultsController : Controller
    {
        VaultsRepository _repo;
        public VaultsController(VaultsRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return _repo.GetAll();
        }
        [HttpGet("{userid}")]

        public IEnumerable<Vault> GetUserVaults(string userid)
        {
            return _repo.GetById(userid);
        }
        [HttpPost]
        public Vault Post([FromBody] Vault vault)
        {
            if (ModelState.IsValid)
            {
                vault = new Vault(vault.Name, vault.Description, vault.UserId);
                return _repo.Create(vault);
            }
            throw new Exception("INVALID VAULT");
        }
        [HttpDelete("{id}")]

        public void Delete(Vault Vault)
        {
            _repo.Delete(Vault);
        }

    }

}