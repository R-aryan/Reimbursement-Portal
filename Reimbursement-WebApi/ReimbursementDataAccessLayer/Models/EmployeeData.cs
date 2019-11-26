using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.Models
{
    public class EmployeeData
    {
        [Required]
        [MaxLength(255)]
        public  string FullName { get; set; }

        [Required]
        [MaxLength(250)]
        public string Email { get; set; }

        [Required]
        [MaxLength(255)]
        public string BankName { get; set; }

        [Required]
        [MaxLength(12)]
        public string AccountNymber { get; set; }

        [Required]
        [MaxLength(10)]
        public string PanNumber { get; set; }

        [Required]
        [MaxLength(255)]
        public string Password { get; set; }

        [Key]
        public int ID { get; set; }

    }
}
