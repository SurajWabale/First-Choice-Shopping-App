using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Category
{
    public int CId { get; set; }

    public string CName { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
