using System;
using System.Collections.Generic;

namespace FirstChoice.Models;

public partial class Size
{
    public int SId { get; set; }

    public string Size1 { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
