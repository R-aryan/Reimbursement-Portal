using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReimbursementDataAccessLayer.Models
{
    public class BankNameList
    {

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [Key]
        public int Id { get; set; }
    }
}
