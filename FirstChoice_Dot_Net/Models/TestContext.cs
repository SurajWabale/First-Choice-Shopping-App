using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace FirstChoice.Models;

public partial class TestContext : DbContext
{
    public TestContext()
    {
    }

    public TestContext(DbContextOptions<TestContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Brand> Brands { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<Ordereditem> Ordereditems { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Size> Sizes { get; set; }

    public virtual DbSet<Vendor> Vendors { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=test", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Brand>(entity =>
        {
            entity.HasKey(e => e.BId).HasName("PRIMARY");

            entity.ToTable("brands");

            entity.Property(e => e.BId).HasColumnName("b_id");
            entity.Property(e => e.BName)
                .HasMaxLength(255)
                .HasColumnName("b_name");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CId).HasName("PRIMARY");

            entity.ToTable("categories");

            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.CName)
                .HasMaxLength(255)
                .HasColumnName("c_name");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CId).HasName("PRIMARY");

            entity.ToTable("customer");

            entity.HasIndex(e => e.LId, "customer_ibfk_1");

            entity.HasIndex(e => e.Email, "email_UNIQUE").IsUnique();

            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.CName)
                .HasMaxLength(255)
                .HasColumnName("c_name");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.LId).HasColumnName("l_id");

            entity.HasOne(d => d.LIdNavigation).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LId)
                .HasConstraintName("customer_ibfk_1");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.LId).HasName("PRIMARY");

            entity.ToTable("login");

            entity.HasIndex(e => e.RoleId, "role_id");

            entity.Property(e => e.LId).HasColumnName("l_id");
            entity.Property(e => e.Pwd)
                .HasMaxLength(255)
                .HasColumnName("pwd");
            entity.Property(e => e.RoleId).HasColumnName("role_id");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.Uid)
                .HasMaxLength(255)
                .HasColumnName("uid");

            entity.HasOne(d => d.Role).WithMany(p => p.Logins)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("login_ibfk_1");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OId).HasName("PRIMARY");

            entity.ToTable("orders");

            entity.HasIndex(e => e.PId, "fk_cid_idx");

            entity.HasIndex(e => e.CId, "orders_ibfk_1");

            entity.Property(e => e.OId).HasColumnName("o_id");
            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Id)
                .HasDefaultValueSql("'1'")
                .HasColumnName("id");
            entity.Property(e => e.PId).HasColumnName("p_id");
            entity.Property(e => e.ShippingAddress)
                .HasMaxLength(255)
                .HasColumnName("shipping_address");
            entity.Property(e => e.TotalAmount).HasColumnName("total_amount");

            entity.HasOne(d => d.CIdNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.CId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_cid");

            entity.HasOne(d => d.PIdNavigation).WithMany(p => p.Orders)
                .HasForeignKey(d => d.PId)
                .HasConstraintName("fk_pid");
        });

        modelBuilder.Entity<Ordereditem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("ordereditems");

            entity.HasIndex(e => e.OId, "FK252q49eiwi2v1fpl5tqq5x0gp");

            entity.HasIndex(e => e.PId, "FKcbiq5735w48jlmtv3my67jota");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.OId).HasColumnName("o_id");
            entity.Property(e => e.PId).HasColumnName("p_id");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.Quantity).HasColumnName("quantity");

            entity.HasOne(d => d.OIdNavigation).WithMany(p => p.Ordereditems)
                .HasForeignKey(d => d.OId)
                .HasConstraintName("o_id");

            entity.HasOne(d => d.PIdNavigation).WithMany(p => p.Ordereditems)
                .HasForeignKey(d => d.PId)
                .HasConstraintName("p_id");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.PId).HasName("PRIMARY");

            entity.ToTable("products");

            entity.HasIndex(e => e.SId, "products_ibfk_1");

            entity.HasIndex(e => e.BId, "products_ibfk_2");

            entity.HasIndex(e => e.CId, "products_ibfk_3");

            entity.HasIndex(e => e.VId, "products_ibfk_4");

            entity.Property(e => e.PId).HasColumnName("p_id");
            entity.Property(e => e.BId).HasColumnName("b_id");
            entity.Property(e => e.CId).HasColumnName("c_id");
            entity.Property(e => e.PDesc)
                .HasColumnType("text")
                .HasColumnName("p_desc");
            entity.Property(e => e.PImage).HasColumnName("p_image");
            entity.Property(e => e.PName)
                .HasMaxLength(255)
                .HasColumnName("p_name");
            entity.Property(e => e.Price)
                .HasPrecision(10, 2)
                .HasColumnName("price");
            entity.Property(e => e.Quantity).HasColumnName("quantity");
            entity.Property(e => e.SId).HasColumnName("s_id");
            entity.Property(e => e.VId).HasColumnName("v_id");

            entity.HasOne(d => d.BIdNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.BId)
                .HasConstraintName("products_ibfk_2");

            entity.HasOne(d => d.CIdNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.CId)
                .HasConstraintName("products_ibfk_3");

            entity.HasOne(d => d.SIdNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.SId)
                .HasConstraintName("products_ibfk_1");

            entity.HasOne(d => d.VIdNavigation).WithMany(p => p.Products)
                .HasForeignKey(d => d.VId)
                .HasConstraintName("products_ibfk_4");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RId).HasName("PRIMARY");

            entity.ToTable("role");

            entity.Property(e => e.RId).HasColumnName("r_id");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .HasColumnName("role_name");
        });

        modelBuilder.Entity<Size>(entity =>
        {
            entity.HasKey(e => e.SId).HasName("PRIMARY");

            entity.ToTable("sizes");

            entity.Property(e => e.SId).HasColumnName("s_id");
            entity.Property(e => e.Size1)
                .HasMaxLength(50)
                .HasColumnName("size");
        });

        modelBuilder.Entity<Vendor>(entity =>
        {
            entity.HasKey(e => e.VId).HasName("PRIMARY");

            entity.ToTable("vendor");

            entity.HasIndex(e => e.LId, "vendor_ibfk_1");

            entity.Property(e => e.VId).HasColumnName("v_id");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .HasColumnName("address");
            entity.Property(e => e.Contact)
                .HasMaxLength(255)
                .HasColumnName("contact");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.LId).HasColumnName("l_id");
            entity.Property(e => e.ShopLicenceId)
                .HasMaxLength(255)
                .HasColumnName("shop_licence_id");
            entity.Property(e => e.VName)
                .HasMaxLength(255)
                .HasColumnName("v_name");

            entity.HasOne(d => d.LIdNavigation).WithMany(p => p.Vendors)
                .HasForeignKey(d => d.LId)
                .HasConstraintName("vendor_ibfk_1");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
