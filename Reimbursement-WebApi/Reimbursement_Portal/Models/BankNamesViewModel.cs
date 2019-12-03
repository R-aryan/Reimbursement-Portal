using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Reimbursement_Portal.Models
{
    public class BankNamesViewModel
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        [Key]
        public int Id { get; set; }
    }
}