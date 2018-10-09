using System;
using System.ComponentModel.DataAnnotations;
namespace keepr.Models
{
    public class Vault
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        [Required]
        [MinLength(6)]
        public string Name { get; set; }
        [Required]
        [MaxLength(255)]
        public string Description { get; set; }
        public Vault() { }
        public Vault(string name, string description, string userId)
        {
            Name = name;
            Description = description;
            UserId = userId;
        }
    }
}