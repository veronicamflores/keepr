using System;
using System.ComponentModel.DataAnnotations;

namespace keepr.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        [Required]
        [MinLength(6)]
        public string Name { get; set; }
        [Required]
        [MaxLength(255)]
        public string Description { get; set; }
        [Required]
        public string Img { get; set; }
        public int IsPrivate { get; set; }
        public int Keeps { get; set; }
        public int Views { get; set; }
        public int Shares { get; set; }


        public Keep() { }
        public Keep(string name, string description, string img, string userId, int isPrivate = 0)
        {
            Name = name;
            Description = description;
            Img = img;
            UserId = userId;
            IsPrivate = isPrivate;
        }
    }
}